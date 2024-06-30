"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const CreateFighter = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [style, setStyle] = useState("");

  const router = useRouter();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const createFighter = async () => {
    // try {
    //   await fetch("http://127.0.0.1:8090/api/collections/fighters/records", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name,
    //       description,
    //       country,
    //       style,
    //     }),
    //   });
    //   return (message: "New Fighter Added");
    // } catch (error) {
    //   return { message: 'API Error: Failed Add Fighter' };
    // }

    await fetch("http://127.0.0.1:8090/api/collections/fighters/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        country,
        style,
      }),
    });

    setName("");
    setDescription("");
    setStyle("");
    setCountry("");

    router.refresh();
  };

  return (
    <div className="container mx-auto bg-slate-500 bg-opacity-30  rounded-sm p-7">
      <h3 className="text-lg text-zinc-100 pb-3">
        Know another legendary fighter?
      </h3>
      <form className="flex flex-col gap-1 max-w-fit" onSubmit={createFighter}>
        <input
          className="p-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="p-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* Todo: Change this to a selector */}
        <input
          className="p-2"
          type="text"
          placeholder="Country (Code)"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          className="p-2"
          type="text"
          placeholder="Fighting style"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        />
        <button
          className="bg-red-500 rounded-sm max-w-fit p-2 mt-3"
          type="submit"
        >
          Create Fighter
        </button>
      </form>
    </div>
  );
};
