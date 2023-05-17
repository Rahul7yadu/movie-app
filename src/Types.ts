export const baseUrl = 'https://api.themoviedb.org/3/'
export type Data = {
  results:[],
  page:number,
  total_pages:number,
  total_results:number

}
export type storeData = {
data:{
  loading:boolean,
  data:Data
}
}

