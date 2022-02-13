import { Button, Form, Input, Select, Space, Table, Tag } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SketchPicker } from "react-color";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"

import { AppState } from "../store";
import { addCategory, deleteCategory, getCategories, updateCategory } from "../store/actions/categoryActions";
import {
  Category,
  CategoryForm,
  CategoryType,
  emptyForm
} from "../types/category";
import { Mode } from "../types/general";

const CategoryTable = () => {
  const { data, loading } = useSelector(
    (state: AppState) => state.categories
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [mode, setMode] = useState<Mode>("new");
  const [form, setForm] = useState<CategoryForm>(emptyForm);
  const [updateId, setUpdateId] = useState<number | null>(null)
  const [deleteId, setDeleteId] = useState<number | null>(null)


  const showModal = (mode: Mode) => {
    setIsModalVisible(true);
    setMode(mode);
  };
  const handleOk = () => {
    // according to value of mode, we will call create or update action creator func
    if (mode === "new") dispatch(addCategory(form));
    else if (mode === "edit" && typeof updateId === "number") dispatch(updateCategory(form, updateId))
    else if (mode === "delete" && typeof deleteId === "number") dispatch(deleteCategory(deleteId))
    setIsModalVisible(false);
    setMode("new");
    setForm(emptyForm);
    setUpdateId(null)

  };
  const handleCancel = () => {
    // at cancel, we close the modal, clear the form and ids
    setIsModalVisible(false);
    setMode("new");
    setForm(emptyForm);
    setUpdateId(null)
    setDeleteId(null)
  };
  // column array for the table 
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text: string, category: Category) => {
        return <Tag color={category.color}>{text.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Action",
      key: "Action",
      render: (text: string, category: Category) => (

        // edit and delete buttons
        <Space size="middle">
          <EditOutlined style={{ color: "blue" }} onClick={() => {
            showModal("edit")
            setForm(category)
            setUpdateId(category.id)
          }} />
          <DeleteOutlined style={{ color: "red" }} onClick={() => {
            showModal("delete")
            setDeleteId(category.id)

          }} />
        </Space>
      )
    }
  ];
  const dispatch = useDispatch();
  // at mount, to get the categories with redux-thunk
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <>
      <div>
        <div className="btn-category">
          {/* new category button */}
          <Button type="primary" onClick={() => showModal("new")}>
            new category
          </Button>
        </div>
        <Modal
          // we use model in the three ways in below
          title={
            mode === "new"
              ? "Create New Category"
              : mode === "delete" ?
                "Delete the category?"
                : "Update Category"
          }
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{ disabled: !(mode === "delete") && !form.name }}
        >
          {
            mode === "edit" || mode === "new" ?
              <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                autoComplete="off"
              >
                <Form.Item label="Category Name"  >
                  <Input
                    name="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                </Form.Item>
                <Form.Item label="Category Type">
                  <Select
                    defaultValue="expense"
                    value={form.type}
                    onChange={(type: CategoryType) =>
                      setForm({ ...form, type })
                    }
                  >
                    <Select.Option value="income">Income</Select.Option>
                    <Select.Option value="expense">
                      Expense
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Color">
                  <SketchPicker
                    color={form.color}
                    onChange={(color) =>
                      setForm({ ...form, color: color.hex })
                    }
                  />
                </Form.Item>
              </Form>
              : mode === "delete" ? <>Are you sure?</> : null}
        </Modal>
      </div>
      {/* here is the columns and rows with the info from state */}
      <Table loading={loading} columns={columns} dataSource={data} rowKey="id" />
    </>
  );
};

export default CategoryTable;
