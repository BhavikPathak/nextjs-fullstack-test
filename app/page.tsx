import Preview from "./review/[slug]/page";

export default function Home() {
  return (
    <section className="grid grid-cols-12 gap-5">
      <div className="col-span-4 h-full">
        <Preview></Preview>
      </div>  
      <div className="col-span-8 mx-auto max-w-5xl min-h-screen flex flex-col md:gap-10 py-10 md:px-15 gap-8 px-4">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-dancing-script font-normal text-3xl md:text-4xl">Enter the list of invite</h1>
          <p className="font-inconsolata font-medium  text-lg md:text-xl">Enter name, description, their relationship to kid and upload their photo for personalized greeting</p>
        </div>
        <table className="table-auto border-collapse ">
            <thead className="border border-b border-b-gray-300">
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Relation</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr className="border border-b border-b-gray-300">
              <td>Name</td>
              <td>Image</td>
              <td>A very lonmg description here and there what to do</td>
              <td>Self</td>
              <td>Action</td>
            </tr>
            </tbody>
        </table>
      </div>
    </section>
  );
}
