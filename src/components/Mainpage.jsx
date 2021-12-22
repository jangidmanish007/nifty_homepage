import React from 'react'
import Counter from './Counter'
import DatabaseTable from './DatabaseTable'
import StockPortal from './StockPortal'
import StockMarket from './StocksMarket'
import Watchlist from './Watchlist'

const Mainpage = () => {
    return (
        <>
        <section className='stockMarket_container mt-5 pb-3 px-0'> 
          <StockMarket  />
        </section>
        <section>
          <StockPortal />
          <DatabaseTable />
          <Watchlist />
          <Counter />
        </section>
        </>
    )
}

export default Mainpage
