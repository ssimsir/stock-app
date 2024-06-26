import { Box } from '@mui/material'
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import useStockRequest from '../services/useStockRequest'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"

const PurchasesTable = ({ handleOpen, setInfo}) => {
   const { purchases } = useSelector((state) => state.stock)
   //console.log(purchases)





   const { deleteStock } = useStockRequest()
 
   const getRowId = (row) => row._id

   const editPurchases = () =>{


   } 
   console.log(purchases)

   const columns = [
    
     {
       field: "createdAt",
       headerName: "Date",
       flex: 1,
       minWidth: 100,
       valueGetter: (value, row) => new Date(row.createdAt).toLocaleTimeString("tr-TR"),
     },
     {
       field: "firmId",
       headerName: "Firm",
       headerAlign: "center",
       type: 'singleSelect',
       valueOptions: ['BOYNER', 'Trendyol', 'ÜLker'],
       align: "center",
       width: 150,
       flex: 1.2,
       editable: true,
       valueGetter: (value, row) => row.firmId?.name,
     },
     {
       field: "brandId",
       headerName: "Brand",
       headerAlign: "center",
       align: "center",
       flex: 1.1,
       miWidth: 110,
       editable: true,
       valueGetter: (value) => value.name,
     },
     {
       field: "productId",
       headerName: "Product",
       sortable: true,
       headerAlign: "center",
       align: "center",
       width: 160,
       valueGetter: (value, row) => row.productId?.name,
     },
     {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
      valueGetter: (value, row) => row.quantity,
    },
     {
      field: "price",
      headerName: "Price",
      sortable: true,
      headerAlign: "center",
      align: "center",
      width: 160,
      valueGetter: (value, row) => row.price,
    },

    {
      field: "amount",
      headerName: "Amount",
      sortable: true,
      headerAlign: "center",
      align: "center",
      width: 160,
      valueGetter: (value, row) => row.amount,
    },

     {
       field: "actions",
       type: "actions",
       headerName: "Operations",
       getActions: (props) => {
         return [
           <GridActionsCellItem
           icon={<EditIcon />}           
           onClick={() => {
             handleOpen()
             setInfo(props.row)
           }}
           label="Edit"
         />,
         <GridActionsCellItem
         icon={<DeleteOutlineIcon />}
         onClick={() => deleteStock("purchases", props.id)}
         label="Delete"
       />,
         ]
       },
     },
     
   ]

   return (
      <Box sx={{ width: "100%" }}>
        <DataGrid
          autoHeight
          rows={purchases}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          getRowId={getRowId}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    )
}

export default PurchasesTable