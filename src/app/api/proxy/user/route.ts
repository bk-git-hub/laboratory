import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET(req: any) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const backendResponse = await fetch(
    "https://sp-taskify-api.vercel.app/5-3/users/me",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.accessToken}`, // Use the appropriate session token or access token
      },
    },
  );
  const data = await backendResponse.json();

  return new Response(JSON.stringify(data), {
    status: backendResponse.status,
  });
}
