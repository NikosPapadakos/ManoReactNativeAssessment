/* eslint-disable */
import axios from 'axios'
import { action, makeObservable, observable, runInAction } from 'mobx'

class AddressesClass {
  addresses = []

  constructor() {
    makeObservable(this, {
      addresses: observable,
      fetchAddresses: action,
    })
  }

  async fetchAddresses() {
    try {
      const response = await axios.get('https://example-api.com/addresses')
      runInAction(() => {
        this.addresses = response.data
      })
    } catch (error) {
      console.error('Error fetching addresses:', error)
    }
  }
}

export const AddressesStore = new AddressesClass()
