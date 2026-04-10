import {
  getLegalDocumentDownloadContentType,
  getLegalDocumentDownloadFileName,
  getLegalDocumentMarkdown,
  getLegalDocumentPlainText,
  hasLegalDocumentVersion,
  isLegalDocumentDownloadFormat,
  isLegalDocumentKey,
  normalizeLegalDocumentVersionParam,
} from "@/lib/legal-documents";

export async function GET(
  request: Request,
  context: RouteContext<"/policies/download/[key]">,
) {
  const { key } = await context.params;

  if (!isLegalDocumentKey(key)) {
    return new Response("Not found", { status: 404 });
  }

  const url = new URL(request.url);
  const formatParam = url.searchParams.get("format");
  const version = normalizeLegalDocumentVersionParam(url.searchParams.get("version") ?? undefined);
  const format = formatParam && isLegalDocumentDownloadFormat(formatParam) ? formatParam : "txt";

  if (version && !hasLegalDocumentVersion(key, version)) {
    return new Response("Not found", { status: 404 });
  }

  const [content, fileName] = await Promise.all([
    format === "md" ? getLegalDocumentMarkdown(key, version) : getLegalDocumentPlainText(key, version),
    Promise.resolve(getLegalDocumentDownloadFileName(key, { format, version })),
  ]);

  return new Response(content, {
    headers: {
      "Content-Disposition": `attachment; filename="${fileName}"; filename*=UTF-8''${encodeURIComponent(fileName)}`,
      "Content-Type": getLegalDocumentDownloadContentType(format),
      "X-Content-Type-Options": "nosniff",
    },
  });
}
