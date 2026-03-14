import { NextResponse } from "next/server"
import { connectToDB } from "@/lib/db"
import { generateSlug } from "random-word-slugs";

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, relation, description } = body

    if (!name || !relation) {
      return NextResponse.json(
        { error: "Name and relation are required" },
        { status: 400 }
      )
    }

    const { db } = await connectToDB()

    const slug = generateSlug();

    const newRelation = {
      name,
      relation,
      description: description || "",
      views: 0,
      maxViews: 2,
      slug,
      createdAt: new Date(),
    }

    console.log(newRelation);
    

    const result = await db
      .collection("my-list")
      .insertOne(newRelation)

    return NextResponse.json({
      success: true,
      insertedId: result.insertedId,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Failed to create relation" },
      { status: 500 }
    )
  }
}

export async function GET(req: Request) {
  try {
    const { db } = await connectToDB()

    const data = await db
      .collection("my-list")
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json(data)
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    )
  }
}