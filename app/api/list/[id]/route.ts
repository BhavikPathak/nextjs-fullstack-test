import { NextResponse } from "next/server"
import { connectToDB } from "@/lib/db"
import { generateSlug } from "random-word-slugs"

export async function GET(req: Request, context: any) {
  try {
    const params = await context.params
    const slug = params.id.toLowerCase() // normalize

    const { db } = await connectToDB()

    const relation = await db.collection("my-list").findOne({ slug })

    if (!relation) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 })
    }

    return NextResponse.json(relation)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch Data" }, { status: 500 })
  }
}

export async function PATCH(req: Request, context: any) {
  try {
    const params = await context.params
    const slug = params.id.toLowerCase()

    const body = await req.json()
    const { views } = body

    const { db } = await connectToDB()

    const updateData: any = { updatedAt: new Date() }
    
    if (views !== undefined) updateData.views = views

    const result = await db.collection("my-list").updateOne(
      { slug },
      { $set: updateData }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 })
  }
}

export async function DELETE(req: Request, context: any) {
  try {
    const params = await context.params
    const slug = params.id.toLowerCase()

    const { db } = await connectToDB()

    const result = await db.collection("my-list").deleteOne({ slug })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete Data" }, { status: 500 })
  }
}