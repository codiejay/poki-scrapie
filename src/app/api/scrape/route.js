import * as cheerio from "cheerio";
import { NextResponse } from "next/server";
import { ScrapeConfig, ScrapflyClient } from "scrapfly-sdk";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  const client = new ScrapflyClient({
    key: "scp-test-9181eee35db9472298f7fbe4b3a21bfa",
  });

  try {
    console.log("Attempting to scrape:", url);
    const apiResponse = await client.scrape(
      new ScrapeConfig({
        url: url,
        render_js: true,
        asp: true,
      })
    );

    const $ = cheerio.load(apiResponse.result.content);
    const usedPrice = $("td#used_price").text().trim();

    return NextResponse.json({
      usedPrice,
      fullResponse: apiResponse,
    });
  } catch (error) {
    console.error("Scraping error:", error);
    return NextResponse.json(
      { error: error.message || "An error occurred while scraping" },
      { status: 500 }
    );
  }
}
