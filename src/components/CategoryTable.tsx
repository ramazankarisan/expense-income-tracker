import { Button, Form, Input, Select, Table, Tag } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SketchPicker } from "react-color";

import { AppState } from "../store";
import { addCategory, getCategories } from "../store/actions/categoryActions";
import {
  Category,
  CategoryForm,
  CategoryType,
  emptyForm,
  Mode,
} from "../types/category";

const CategoryTable = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.categories
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [mode, setMode] = useState<Mode>("new");
  const [form, setForm] = useState<CategoryForm>(emptyForm);

  const showModal = (mode: Mode) => {
    setIsModalVisible(true);
    setMode(mode);
  };
  const handleOk = () => {
    // according to value of mode, we will call create or update action creator func
    dispatch(addCategory(form));
    setIsModalVisible(false);
    setMode("new");
    setForm(emptyForm);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setMode("new");
    setForm(emptyForm);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "type",
      dataIndex: "type",
      key: "type",
      render: (text: string, category: Category) => {
        return <Tag color={category.color}>{text.toUpperCase()}</Tag>;
      },
    },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <>
      <div>
        <Button type="primary" onClick={() => showModal("new")}>
          new category
        </Button>
        <Modal
          title={
            mode === "new"
              ? "Create New Category"
              : "Update Category"
          }
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{ disabled: !form.name }}
        >
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
        </Modal>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default CategoryTable;
