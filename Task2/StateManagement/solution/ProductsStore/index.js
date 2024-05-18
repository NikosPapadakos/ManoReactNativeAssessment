/* eslint-disable */
import axios from 'axios'
import { action, makeObservable, observable, runInAction } from 'mobx'

class ProductsClass {
  products = []

  constructor() {
    makeObservable(this, {
      products: observable,
      fetchProducts: action,
    })
  }

  async fetchProducts() {
    try {
      const response = await axios.get('https://example-api.com/products')
      runInAction(() => {
        this.products = response.data
      })
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }
}

export const ProductsStore = new ProductsClass()
