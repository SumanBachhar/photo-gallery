import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const colRef = collection(projectFirestore, "image");
    const unsub = onSnapshot(colRef, {
      next: (snap) => {
        let documents = [];
        setPosts(
          snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        setDocs(documents);
      },
    });

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
