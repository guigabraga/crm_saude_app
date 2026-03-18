import { DataGrid, type GridRowsProp, type GridColDef, type GridRenderCellParams } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import useQueryPatient from '../../../../hooks/useQueryPatient';
import dayjs from 'dayjs';
import ButtonAppointmentsOptions from './ButtonAppointmentsOptions';
import { ButtonAppointmentEnd, ButtonUpdateAppointmentWait } from '../../../../components';

type TProps = {
  patientId: number;
}

export default function DrawerAppointmentsDataTable({ patientId }: TProps) {

  const columns: GridColDef[] = [
    {
      field: 'date',
      headerName: 'Data',
      flex: 1,
      renderCell: (params) => (
        <span style={{ fontSize: '12px', fontWeight: 500 }}>
          {dayjs(params.value).format('DD/MM/YYYY HH:mm')}
        </span>
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: (params) => (
        <span style={{ fontSize: '12px', fontWeight: 500 }}>
          {params.value}
        </span>
      ),
    },
    {
      field: 'update',
      headerName: 'Atualizar',
      width: 180,
      filterable: false,
      sortable: false,
      renderCell(params: GridRenderCellParams) {
        const status = params.row.status;
        if (status === "AGUARDANDO") {
          return <ButtonUpdateAppointmentWait
            id={params.row.id}
            patientId={patientId}
          />
        }
        if (status === "EM_ATENDIMENTO") {
          return <ButtonAppointmentEnd
            id={params.row.id}
            patientId={patientId}
          />
        }
      },
    },
    {
      field: 'options',
      headerName: 'Opções',
      flex: 1,
      filterable: false,
      sortable: false,
      renderCell(params: GridRenderCellParams) {
        return <ButtonAppointmentsOptions
          date={params.row.date}
          description={params.row.description}
          status={params.row.status}
          id={params.row.id}
        />
      },
    },
  ];

  const { data } = useQueryPatient(patientId);

  const rows: GridRowsProp =
    data?.data.appointments?.map((appointment) => ({
      id: appointment.id,
      date: appointment.date,
      status: appointment.status,
      description: appointment.description,
    })) ?? [];

  return (
    <Box sx={{ height: "100%", width: "95%", display: "flex", flexDirection: "column" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
          flex: 1,
          overflow: "auto",
          "& .MuiDataGrid-virtualScroller": {
            overflow: "auto",
          },
          "& .MuiDataGrid-columnHeaders": {
            position: "sticky",
            top: 0,
            zIndex: 1,
          },
        }}
      />
    </Box>
  )
}