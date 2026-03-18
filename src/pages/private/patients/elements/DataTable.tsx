import { DataGrid, type GridRowsProp, type GridColDef, type GridRenderCellParams } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import useQueryPatients from '../../../../hooks/useQueryPatients';
import ButtonNewAppointment from './ButtonNewAppointment';
import ButtonAppointment from './ButtonAppointments';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Nome',
    flex: 1
  },
  {
    field: 'phone',
    headerName: 'Telefone',
    flex: 1
  },
  {
    field: 'appointments',
    headerName: 'Atendimentos',
    filterable: false,
    sortable: false,
    flex: 1,
    renderCell(params: GridRenderCellParams) {
      const count = params.row.appointments ?? 0;
      if (count === 0) {
        return <ButtonNewAppointment
          patientId={params.row.id}
        />
      }
      return <ButtonAppointment patientId={params.row.id} />
    },
  },
];

export default function DataTable() {

  const {
    data,
  } = useQueryPatients();

  const rows: GridRowsProp =
    data?.map((patient) => ({
      id: patient.id,
      name: patient.name,
      phone: patient.phone,
      appointments: patient._count.appointments,
    })) ?? [];

  return (
    <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column" }}>
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