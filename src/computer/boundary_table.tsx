import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

function BasicBoundaryDataTable() {
  const data = [
    {
      host_num: 1,
      display_num: 1,
      peripheral_num: 1,
      sale_amount: 100,
      result: "10",
    },
    {
      host_num: 2,
      display_num: 1,
      peripheral_num: 1,
      sale_amount: 125,
      result: "12.5",
    },
    {
      host_num: 5,
      display_num: 5,
      peripheral_num: 5,
      sale_amount: 500,
      result: "50",
    },
    {
      host_num: 9,
      display_num: 10,
      peripheral_num: 10,
      sale_amount: 975,
      result: "97.5",
    },
    {
      host_num: 10,
      display_num: 10,
      peripheral_num: 10,
      sale_amount: 1000,
      result: "100",
    },
    {
      host_num: 11,
      display_num: 10,
      peripheral_num: 10,
      sale_amount: 1025,
      result: "153.75",
    },
    {
      host_num: 14,
      display_num: 14,
      peripheral_num: 14,
      sale_amount: 1400,
      result: "210",
    },
    {
      host_num: 17,
      display_num: 18,
      peripheral_num: 18,
      sale_amount: 1775,
      result: "266.25",
    },
    {
      host_num: 18,
      display_num: 18,
      peripheral_num: 18,
      sale_amount: 1800,
      result: "270",
    },
    {
      host_num: 19,
      display_num: 18,
      peripheral_num: 18,
      sale_amount: 1825,
      result: "365",
    },
    {
      host_num: 35,
      display_num: 40,
      peripheral_num: 45,
      sale_amount: 4100,
      result: "820",
    },
    {
      host_num: 69,
      display_num: 80,
      peripheral_num: 90,
      sale_amount: 8175,
      result: "1635",
    },
    {
      host_num: 70,
      display_num: 80,
      peripheral_num: 90,
      sale_amount: 8200,
      result: "1640",
    },
  ];
  return (
    <TableContainer component={Paper} style={{ maxHeight: 500 }}>
      <Table className="datatable" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>序号</TableCell>
            <TableCell>主机数量</TableCell>
            <TableCell>显示器数量</TableCell>
            <TableCell>外设数量</TableCell>
            <TableCell>销售总额</TableCell>
            <TableCell>结果</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row.host_num + row.display_num + row.peripheral_num}>
              <TableCell> {index + 1}</TableCell>
              <TableCell> {row.host_num}</TableCell>
              <TableCell>{row.display_num}</TableCell>
              <TableCell>{row.peripheral_num}</TableCell>
              <TableCell>{row.sale_amount}</TableCell>
              <TableCell>{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicBoundaryDataTable;
