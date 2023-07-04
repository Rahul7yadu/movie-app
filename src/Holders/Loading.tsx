import { Paper } from "@mui/material"
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">

    <Paper className="h-1/2 text-xl w-1/4 border-sky-200 bg-slate-400 flex justify-center items-center">
      <img src='/spinner.gif'></img>
      </Paper>
    </div>
  )
}

export default Loading
