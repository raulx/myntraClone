/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEditProductDetailsMutation } from "@/store";
import { FaSpinner } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

function EditableRegularTextField({ fieldName, productData }) {
  const [editState, setEditState] = useState({
    isEditing: false,
    field: "",
    value: "",
  });
  const [editProduct, { isLoading: editingProduct }] =
    useEditProductDetailsMutation();

  const handleEdit = ({ field, value }) => {
    setEditState((prevValue) => {
      return { ...prevValue, isEditing: true, field: field, value: value };
    });
  };
  const handleSave = async () => {
    const newData = {
      product_id: productData.product.product_id,
      field: editState.field,
      updated_value: editState.value,
    };
    try {
      await editProduct(newData);
      setEditState((prevValue) => {
        return { ...prevValue, isEditing: false };
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <span className="font-bold uppercase">{fieldName}: </span>
      {editState.isEditing && editState.field === fieldName ? (
        <div className="flex gap-4">
          <input
            className="px-2 rounded border-2 flex-grow"
            value={editState.value}
            onChange={(e) =>
              setEditState((prevValue) => {
                return { ...prevValue, value: e.target.value };
              })
            }
          />
          <button
            onClick={handleSave}
            className="bg-green-500 rounded text-white border-2 px-2 py-1"
          >
            {editingProduct ? (
              <FaSpinner className="animate-spin" />
            ) : (
              <>Save</>
            )}
          </button>
        </div>
      ) : (
        <>
          {productData.product[fieldName]}

          <button
            onClick={() =>
              handleEdit({
                field: fieldName,
                value: productData.product[fieldName],
              })
            }
            className="text-red-600 text-lg rounded px-1 m-2"
          >
            <FaEdit />
          </button>
        </>
      )}
    </div>
  );
}

function NestedProductDetailFeild({
  field,
  currentValue,
  productId,
  fieldType,
}) {
  const [editState, setEditState] = useState({
    isEditing: false,
    field: "",
    updatedValue: "",
  });
  const [editProduct, { isLoading: editingData }] =
    useEditProductDetailsMutation();
  const handleEdit = () => {
    setEditState(() => {
      return { ...editState, isEditing: true, updatedValue: currentValue };
    });
  };
  const handleSave = async () => {
    const newData = {
      product_id: productId,
      field: fieldType,
      updated_value: JSON.stringify({
        field: field,
        value: editState.updatedValue,
      }),
    };
    try {
      await editProduct(newData);

      setEditState((prevValue) => {
        return { ...prevValue, isEditing: false };
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <span className="font-bold uppercase">{field}: </span>

      {editState.isEditing ? (
        <div className="flex items-center">
          <input
            className="px-2 rounded border-2 flex-grow"
            value={editState.updatedValue}
            onChange={(e) =>
              setEditState((prevValue) => {
                return { ...prevValue, updatedValue: e.target.value };
              })
            }
          />
          <button
            onClick={handleSave}
            className="bg-green-500 rounded text-white border-2 px-2 py-1"
          >
            {editingData ? <FaSpinner className="animate-spin" /> : <>Save</>}
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <h1>{currentValue}</h1>
          <button
            className="text-red-600 rounded text-lg  px-1 m-2"
            onClick={handleEdit}
          >
            <FaEdit />
          </button>
        </div>
      )}
    </div>
  );
}

export { NestedProductDetailFeild };
export default EditableRegularTextField;
