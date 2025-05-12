import { composeErrorMessage } from "~/lib/composeErrorMessage";
import { fetchFromPlausibleApi } from "~/analytics/fetchFromPlausibleApi";

type PageVisitorsMetrics = {
  pageUrl: string;
  visitorsCount: number;
};

export async function getTopPageByVisitors(): Promise<
  | { status: "success"; data: PageVisitorsMetrics }
  | { status: "error"; error: string }
> {
  try {
    const data = await fetchFromPlausibleApi("query", {
      method: "POST",
      body: {
        date_range: "all",
        metrics: ["visitors"],
        dimensions: ["event:page"],
        order_by: [["visitors", "desc"]],
        pagination: {
          limit: 1,
        },
      },
    });

    return {
      status: "success",
      data: normalizeData(data),
    };
  } catch (error) {
    return {
      status: "error",
      error: composeErrorMessage(error, "Failed to get top page by visitors"),
    };
  }
}

function normalizeData(data: any): PageVisitorsMetrics {
  const result = data.results[0];

  return {
    pageUrl: result.dimensions[0],
    visitorsCount: result.metrics[0],
  };
}
