export async function GET() {

    return Response.json(
      { message: "Server error" },
      { status: 500 }
    );

}