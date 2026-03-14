"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

interface InputFormProps {
  updated?: () => void
}

type FormData = {
  name: string
  relation: string
  description: string
}

export default function InputForm({ updated }: InputFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    relation: "",
    description: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    create({...formData}).then((data)=>{
      console.log('Success save', data);
      setFormData({
        name: "",
        relation: "",
        description: "",
      });
    }).finally(()=>{
      updated?.();
      toast(`Added ${formData.name}`);
    })
  }

  return (
    <Card className="mx-auto max-w-lg w-full">
      <CardHeader>
        <CardTitle>Add Relation</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-x-5 flex flex-col gap-5">
          <div className="flex gap-5">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="relation">Relation</Label>
            <Input
              id="relation"
              name="relation"
              placeholder="e.g. Friend, Brother"
              value={formData.relation}
              onChange={handleChange}
              required
            />
          </div>
        </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Write description..."
              rows={4}
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>

        </form>
      </CardContent>
    </Card>
  )
}

export async function create(data: {
  name: string
  relation: string
  description?: string
}) {
  const res = await fetch("/api/list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error("Failed to create relation")
  }

  return res.json()
}