import axios from "axios"
import type { ModifiedProduct, Product, ResponseData, UserInput } from "./types"
import { SortOrder } from './types';
import * as fs  from 'fs'




const fetchData = async () => {
  const { data } = await axios.get("https://dummyjson.com/products?limit=100")

  return data as ResponseData
}


const sortData = (products: Product[], order: SortOrder) => {
  if (!products) return
  switch (order) {
    case SortOrder.ASC:
      return [...products].sort((a, b) => a.price - b.price)
    case SortOrder.DESC:
      return [...products].sort((a, b) => b.price - a.price)

    default:
      return products
  }
}

async function scrape(input: UserInput<true>): Promise<ModifiedProduct[]>;
async function scrape(input: UserInput<false>): Promise<Product[]>;
async function scrape(input: UserInput) {
    const data = await fetchData();

    const sorted = sortData(data.products, input.sort as SortOrder);

    if (input.removeImages) {
        return sorted.map((item) => {
            const { images, ...rest } = item;

            return rest;
        });
    }

    return sorted;
}

const main = async (pathFile: string) => {
    const INPUT: UserInput<false> = { sort: 'ascending', removeImages: false };

    try {
      const result = await scrape(INPUT);

      fs.writeFile(pathFile, JSON.stringify(result, null, 2), 'utf8', (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {

          console.log('Data written successfully to', pathFile);
        }
      });

    } catch (error) {
      console.error("Error fetching data", error)

    }


};

main('./data.json');


let myName


myName = 'Pedro'

let newName = (myName as string)
