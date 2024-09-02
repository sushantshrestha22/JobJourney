import React from "react";

export default function Card() {
  return (
    <div>
      <div className="bg-white rounded-md border border-2 border-black w-[350px] h-[40hv] p-3 text-white ">
        <div className="px-[10px] rounded bg-[#0F172A] h-[30vh] flex flex-col justify-center gap-[20px] ">
          <div className="flex ">
            <div>Company Name</div>
          
          </div>
          <div className="text-4xl font-bold">Junior UI/UX Designer</div>
          <div className="grid grid-cols-3 gap-2">
            <button className="border bg-transparent text-white rounded h-[30px]  text-sm">Project work</button>
            <button className="border bg-transparent text-white rounded h-[30px] text-sm">Part-time</button>
            <button className="border bg-transparent text-white rounded h-[30px] text-sm">Skills</button>
            {/* <button className="border bg-transparent text-white rounded h-[30px] text-sm">skills</button> */}
          </div>
        </div>
        <div className="flex  justify-between items-center ">
            <div className="text-[#0F172A] px-[20px] font-semibold ">
                <div>Salary</div>
                <div>Location</div>
            </div>
            <button className="bg-[#0F172A] text-white rounded h-[30px] text-sm w-[100px]">Detail</button>
        </div>
      </div>
    </div>
  );
}
// lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1