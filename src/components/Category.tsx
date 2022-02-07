import { Table, Tag } from 'antd';
import React from 'react';
import { Category } from '../types/category';

const Category = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',

    },
    {
      title: 'type',
      dataIndex: 'type',
      key: 'type',
      render: (text: string, category: Category) => {

        return <Tag color={category.color}>{text.toUpperCase()}</Tag>
      }
    }

    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (text, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];
  return <>
    <Table columns={columns} dataSource={data} />
  </>;
};

export default Category;
