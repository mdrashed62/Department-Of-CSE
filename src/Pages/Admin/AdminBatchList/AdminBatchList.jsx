import React, { useState } from "react";
import ListTable from "../../../Components/ListTable";
import { batchList } from "../../../Shared";  // Assuming you have a similar list of batches as studentList

const AdminBatchList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Define the columns with titles and accessors for each field
  const columns = [
    { title: "Batch Name", accessor: "batchName" },
    { title: "Course Code", accessor: "courseCode" },
    { title: "Start Date", accessor: "startDate", isDate: true },
    { title: "End Date", accessor: "endDate", isDate: true },
    { title: "Total Students", accessor: "totalStudents" },
  ];

  return (
    <div>
      <ListTable
        columns={columns}
        rows={batchList}  // Data source, replace with actual batch data
        rowsPerPage={rowsPerPage}
        page={page}
        setRowsPerPage={setRowsPerPage}
        setPage={setPage}
        enableEdit={true}
        enableDelete={true}
        enableView={true}
        edit_url={"edit-batch"}  // URL for editing batch
        view_url={"view-batch"}  // URL for viewing batch details
        deleteItem={() => {}}  // Handle delete action
      />
    </div>
  );
};

export default AdminBatchList;
