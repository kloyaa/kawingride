import {
  getLegalDocumentDownloadFileName,
  getLegalDocumentPlainText,
  isLegalDocumentKey,
} from "@/lib/legal-documents";

export async function GET(
  _request: Request,
  context: RouteContext<"/policies/download/[key]">,
) {
  const { key } = await context.params;

  if (!isLegalDocumentKey(key)) {
    return new Response("Not found", { status: 404 });
  }

  const [content, fileName] = await Promise.all([
    getLegalDocumentPlainText(key),
    Promise.resolve(getLegalDocumentDownloadFileName(key)),
  ]);

  return new Response(content, {
    headers: {
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
