import Swal from "sweetalert2";
import { articleApi } from "../../app/api";

export const getAllArticles = async () => {
  try {
    const { data } = await articleApi.get();
    return data;
  } catch (error) {
    console.error("error server", error);
  }
};

export const deleteArticle = async (id) => {
  let status = null;

  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You want to delete this article!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });

  if (result.isConfirmed) {
    try {
      const response = await articleApi.delete(`/${id}`);

      status = response.status;

      if (response.status === 200) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return status;
};
