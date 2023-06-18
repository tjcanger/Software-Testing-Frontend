import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper  from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { InputLabel, NativeSelect, Typography } from '@material-ui/core';
import BasicTable from './des_table';
import CaseTable from './case_table';
import EchartsTest from './echarts_test';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    Paper: {
      padding: theme.spacing(2),
    //   textAlign: 'center',
      color: theme.palette.text.secondary,
      minHeight: 710,
    },
  }),
);

//写一个UseCase函数组件，返回的JSX随option value变化
function UseCase(props: { value: string }) {
    switch (props.value) {
        case "1":
            return <div><br/>
            <Typography>边界值测试用例</Typography>
            <Typography>对于通话时长的总区间和每个分区间进行边界值测试：-1, 0, 1, 150, 20000, 44639, 44640, 44641</Typography>
            <Typography>未按时缴费次数：-1, 0, 1, 5, 10, 11, 12</Typography>
            <CaseTable/></div>;
        case "2":
            return <div><br/><Typography>等价类测试用例</Typography><CaseTable/></div>;
        case "3":
            return <div><br/><Typography>决策表测试用例</Typography><CaseTable/></div>;
        default:
            return <div><br/><Typography>请选择测试方法</Typography></div>;
    }
}


export default function Telecom() {
  const classes = useStyles();
  const [val, setVal] = React.useState("1");

  const code = `function telecomSystem(callingTime: number, count: number): string {
    if (callingTime < 0 || callingTime > 31 * 24 * 60) {
        return "通话时长数值越界"
    }
    if (count < 0 || count > 11) {
        return "未按时缴费次数越界"
    }

    let maxNum: number[] = [1, 2, 3, 3, 6]
    let level: number = getLevel(callingTime)
    if (count <= maxNum[level - 1]) {
        return String(Math.round((25 + 0.15 * callingTime * (1 - (level + 1) * 0.005)) * 100) / 100)
    } else {
        return String(Math.round((25 + 0.15 * callingTime) * 100) / 100)
    }
}

function getLevel(time: number): number {
    if (time > 0 && time <= 60)
        return 1
    else if (time > 60 && time <= 120)
        return 2
    else if (time > 120 && time <= 180)
        return 3
    else if (time > 180 && time <= 300)
        return 4
    else
        return 5
}`

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setVal(event.target.value as string);
    };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <Paper elevation={3} className={classes.Paper }>
            <Typography  variant="h6" color='primary'>题目描述</Typography>
            <br></br>
            <Typography >研究一个与我们的生活息息相关的电信收费问题系统，需求描述如下：
                <br/>
A.每月的电话总费用=基本月租费+折扣后的实际的通话费，如果没有折扣则按实际通话费计算，基本月租费为25元，每分钟通话费为0.15元。
 <br/>
B.实际通话费是否有折扣与当月的通话时间（分钟）和本年度至本月的累计未按时缴费的次数有关。
 <br/>
C.当月的通话分钟数和折扣比例及本年度未按时缴费次数之间有直接的对应关系，如果本年度的未按时缴费的次数超过本月通话时间所对应的容许值则免于折扣，并按实际的通话费计算。
 <br/>
D.通话时间和折扣比例及未按时缴费次数的关系为：

            </Typography><br/>
            <BasicTable/>
            <br/>
            <Typography>用边界值，等价类和决策表设计测试用例，根据三种方法，最后设计出最优的一组测试用例集</Typography>
          </Paper >
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={3} className={classes.Paper } >
            
            <Typography  variant="h6" color='primary'>测试用例</Typography>
<br/>
            <InputLabel htmlFor="select"></InputLabel>
            <NativeSelect id="select" fullWidth value={val} onChange={handleChange}>
            <option value="1">边界值</option>
            <option value="2">等价类</option>
            <option value="3">决策表</option>
           
            </NativeSelect>
             <UseCase value={val} />
          </Paper >
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.Paper }>
            <Typography  variant="h6" color='primary'>测试代码</Typography>
            <br/>
            {/* <Typography>TODO: 找一个代码块组件贴在这里</Typography> */}
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
                                {code}
                            </SyntaxHighlighter>
          </Paper >
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.Paper }>
            <Typography  variant="h6" color='primary'>测试结果</Typography>
            <EchartsTest/>
          </Paper >
        </Grid>
      </Grid>
    </div>
  );
}
