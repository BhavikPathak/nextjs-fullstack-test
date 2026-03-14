
"use client";

import { useEffect, useState } from "react";
import DataTable, { Dataset } from "../ui/DataTable";
import InputForm from "../ui/InputForm";
import { toast } from "sonner";

export default function listPage() {
  const [list,setList] = useState<Dataset[]>([]);

  const handleEdit = (item: Dataset) => {
    console.log("Edit:", item)
  }

  const handleDelete = (slug: string) => {
    deleteEntry(slug).then(()=>{
      fetchUpdatedList();
      toast('Deleted Successfully');
    })
  }
  
  const handleUpdate = () => {
   fetchUpdatedList();
  }

  const handleRepeat = (slug: string) => {
    resetViewCount(slug).then(()=>{
      fetchUpdatedList();
      toast('Reset View Successfully');
    })
  }

  useEffect(()=>{
    fetchUpdatedList();
  },[])

 const fetchUpdatedList= () => {
    getAll().then((data)=>{
    setList(data);
   });
  }


  return (
    <section>  
      <div className="mx-auto max-w-7xl max-h-screen flex flex-col md:gap-10 py-10 md:px-15 gap-8 px-4">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-dancing-script font-normal text-3xl md:text-4xl">Greeting list</h1>
          <p className="font-inconsolata font-medium  text-md md:text-lg">Enter name, description, their relationship to kid for personalized greeting</p>
        </div>
        <div className="flex flex-col gap-5">
        <div className="overflow-hidden">
          <DataTable data={list} onEdit={handleEdit} onDelete={handleDelete} onRepeat={handleRepeat}></DataTable>
        </div>
        <div className="">
          <InputForm updated={handleUpdate}></InputForm>
        </div>
      </div>
      </div>
    </section>
  );
}

export async function getAll() {
  const res = await fetch("/api/list", {
    method: "GET",
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch relations")
  }

  return res.json()
}

export async function deleteEntry(slug: string) {
  const res = await fetch(`/api/list/${slug}`, {
    method: "DELETE",
  })

  if (!res.ok) {
    throw new Error("Failed to delete relation")
  }

  return res.json()
}

export async function resetViewCount(slug:string) {
  const views = 0;
  await fetch(`/api/list/${slug}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({views}),
})
}