import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';

export default function Jcb() {
  return (
    <TableContainer component={Paper} style={{maxHeight: 260}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>规则</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>
            <TableCell>5</TableCell>
            <TableCell>6</TableCell>
            <TableCell>7</TableCell>
            <TableCell>8</TableCell>
            <TableCell>9</TableCell>
            <TableCell>10</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>m</TableCell>
            <TableCell>m1</TableCell>
            <TableCell>m1</TableCell>
            <TableCell>m2</TableCell>
            <TableCell>m2</TableCell>
            <TableCell>m3</TableCell>
            <TableCell>m3</TableCell>
            <TableCell>m4</TableCell>
            <TableCell>m4</TableCell>
            <TableCell>m5</TableCell>
            <TableCell>m5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>c</TableCell>
            <TableCell>c1</TableCell>
            <TableCell>c2~c5</TableCell>
            <TableCell>c1,c2</TableCell>
            <TableCell>c3~c5</TableCell>
            <TableCell>c1~c3</TableCell>
            <TableCell>c4,c5</TableCell>
            <TableCell>c1~c3</TableCell>
            <TableCell>c4~c5</TableCell>
            <TableCell>c1~c4</TableCell>
            <TableCell>c5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>有折扣</TableCell>
            <TableCell>√</TableCell>
            <TableCell></TableCell>
            <TableCell>√</TableCell>
            <TableCell></TableCell>
            <TableCell>√</TableCell>
            <TableCell></TableCell>
            <TableCell>√</TableCell>
            <TableCell></TableCell>
            <TableCell>√</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>无折扣</TableCell>
            <TableCell></TableCell>
            <TableCell>√</TableCell>
            <TableCell></TableCell>
            <TableCell>√</TableCell>
            <TableCell></TableCell>
            <TableCell>√</TableCell>
            <TableCell></TableCell>
            <TableCell>√</TableCell>
            <TableCell></TableCell>
            <TableCell>√</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>折扣率</TableCell>
            <TableCell>1.0%</TableCell>
            <TableCell>0</TableCell>
            <TableCell>1.5%</TableCell>
            <TableCell>0</TableCell>
            <TableCell>2.0%</TableCell>
            <TableCell>0</TableCell>
            <TableCell>2.5%</TableCell>
            <TableCell>0</TableCell>
            <TableCell>3%</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
