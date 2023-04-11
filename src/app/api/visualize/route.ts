import { Vibes } from "@/types/vibes";
import { NextRequest, NextResponse } from "next/server";

type VisualizeRequest = {
  imageUrl: string;
  vibe: Vibes;
  description: string;
};

const VibePrompts: Record<Vibes, string> = {
  "ultra-realistic":
    "ultra realistic, best quality, real world, high resolution, extremely detailed, 4k",
  "low-poly": "low poly, low polygon, low poly art, low poly style",
  anime:
    "digital painting, comic style, artstation, concept art, smooth, sharp focus, illustration, art by artgerm and greg rutkowski and alphonse mucha",
  cartoon:
    "2d animation, cartoon, low detail, solid colors, limited palette, simplistic illustration, minimal design",
  painting:
    "olpntng style, girl,cute,real, oil painting, heavy strokes, paint dripping",
};

const VibeDescriptionPrefixes: Record<Vibes, string> = {
  "ultra-realistic": "A photo of a ",
  "low-poly": "A low-poly rendering of a ",
  anime: "An anime-style rendering of a ",
  cartoon: "A cartoon-style rendering of a ",
  painting: "A painting of a ",
};

export async function POST(req: NextRequest) {
  const body = (await req.json()) as VisualizeRequest;

  const { imageUrl, vibe, description } = body;

  let response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.REPLICATE_API_KEY as string}`,
    },
    body: JSON.stringify({
      version:
        "435061a1b5a4c1e26740464bf786efdfa9cb3a3ac488595a2de23e143fdb0117",
      input: {
        image: imageUrl,
        prompt: `${VibeDescriptionPrefixes[vibe]}${description}}`,
        ddim_steps: 30,
        scale: 15,
        a_prompt: VibePrompts[vibe],
        n_prompt:
          "longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality",
      },
    }),
  });

  let jsonResponse = await response.json();

  let pollUrl = jsonResponse.urls.get;
  const originalImage = jsonResponse.input.image;
  const vizId = jsonResponse.id;

  let generatedImage: string | null = null;
  while (!generatedImage) {
    let completedResponse = await fetch(pollUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.REPLICATE_API_KEY as string}`,
      },
    });
    let jsonCompletedResponse = await completedResponse.json();

    if (jsonCompletedResponse.status === "succeeded") {
      generatedImage = jsonCompletedResponse.output[1] as string;
    } else if (jsonCompletedResponse.status === "failed") {
      break;
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  return NextResponse.json({
    original: originalImage,
    generated: generatedImage,
    vizId,
  });
}
