import axios from "axios";

type ErrorPayload =
  | string
  | {
      error?: string;
      errors?: Record<string, string | string[]> | Array<{ message?: string }>;
      message?: string;
    };

function flattenFieldErrors(errors: Record<string, string | string[]>) {
  return Object.values(errors)
    .flatMap((value) => (Array.isArray(value) ? value : [value]))
    .filter(Boolean)
    .join(" ");
}

export function getErrorMessage(error: unknown, fallback = "Something went wrong. Please try again.") {
  if (axios.isAxiosError<ErrorPayload>(error)) {
    const data = error.response?.data;

    if (typeof data === "string" && data.trim()) {
      return data.trim();
    }

    if (data && typeof data === "object") {
      if (typeof data.message === "string" && data.message.trim()) {
        return data.message.trim();
      }

      if (typeof data.error === "string" && data.error.trim()) {
        return data.error.trim();
      }

      if (Array.isArray(data.errors)) {
        const message = data.errors
          .map((item) => item.message?.trim())
          .filter(Boolean)
          .join(" ");

        if (message) {
          return message;
        }
      }

      if (data.errors && !Array.isArray(data.errors)) {
        const message = flattenFieldErrors(data.errors);

        if (message) {
          return message;
        }
      }
    }

    if (error.code === "ECONNABORTED") {
      return "The request took too long to finish. Please try again.";
    }
  }

  if (error instanceof Error && error.message.trim()) {
    return error.message.trim();
  }

  return fallback;
}
