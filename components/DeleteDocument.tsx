"use client";

import { deleteDocument } from "@/lib/actions/room.actions";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";

const DeleteDocument = ({ roomId }: { roomId: string }) => {
  const [loading, setLoading] = useState(false);
  const deleteDocumentHandler = async () => {
    try {
      setLoading(true);
      const room = await deleteDocument(roomId);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="remove-btn">
      {loading ? (
        "deleting..."
      ) : (
        <Image
          src="/assets/icons/delete.svg"
          alt="delete"
          width={28}
          height={28}
          onClick={deleteDocumentHandler}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default DeleteDocument;
