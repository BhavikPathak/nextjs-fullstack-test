"use client"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Copy, Pencil, Repeat1, Trash } from "lucide-react"
import { toast } from "sonner"

export type Dataset = {
  id: string
  name: string
  relation: string
  description: string
  views: number
  maxViews: number
  slug: string
}

interface DataTableProps {
  data: Dataset[]
  onEdit?: (item: Dataset) => void
  onDelete?: (slug: string) => void
  onRepeat?: (slug: string) => void
}

export default function DataTable({
  data,
  onEdit,
  onDelete,
  onRepeat
}: DataTableProps) {
  const onCopy = (item:Dataset) => {
    const URL = `${window.location.origin}/review/${item.slug}`;
    navigator.clipboard.writeText(URL).then(()=>{
      toast('Copied');
    })
  }


  return (
    <div className="w-full h-full overflow-auto rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Relation</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Views</TableHead>
            <TableHead>Max Views</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center text-muted-foreground">
                No records found
              </TableCell>
            </TableRow>
          ) : (
            data.map((item) => (
              <TableRow key={item.slug}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.relation}</TableCell>
                <TableCell className="max-w-[250px] truncate">
                  {item.description}
                </TableCell>
                <TableCell>{item.views}</TableCell>
                <TableCell>{item.maxViews}</TableCell>
                <TableCell className="text-muted-foreground">
                  {item.slug}
                </TableCell>

                <TableCell className="text-right space-x-2">
{/*                   <Button
                    variant="outline"
                    size="icon"
                    disabled
                    onClick={() => onEdit?.(item)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button> */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => onCopy?.(item)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button> 

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => onRepeat?.(item.slug)}
                  >
                    <Repeat1 className="h-4 w-4" />
                  </Button> 

                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => onDelete?.(item.slug)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}