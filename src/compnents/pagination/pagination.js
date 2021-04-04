import React from 'react'


export default function Pagination( {p, setP}){
    return (
        <>
            {
                p === 1 ? (
                    <>
                        <button className='pagButt' disabled={true} onClick={() => setP(p + 1 - p)}>
                            First
                        </button>
                        <button className='pagButt' disabled={true} onClick={() => setP(p - 1)}>
                            Previous
                        </button>
                    </>
                ) : (
                    <>
                        <button className='pagButt' disabled={false} onClick={() => setP(p + 1 - p)}>
                            First
                        </button>
                        <button className='pagButt' disabled={false} onClick={() => setP(p - 1)}>
                            Previous
                        </button>
                    </>
                )
            }
            <div className='pagCount'><p>{p}</p></div>
            {
                p === 500 ? (
                    <>
                        <button className='pagButt' disabled={true} onClick={() => setP(p + 1)}>
                            Next
                        </button>
                        <button className='pagButt' disabled={true} onClick={() => setP(p - p + 500)}>
                            Last
                        </button>
                    </>
                ) : (
                    <>
                        <button className='pagButt' disabled={false} onClick={() => setP(p + 1)}>
                            Next
                        </button>
                        <button className='pagButt' disabled={false} onClick={() => setP(p - p + 500)}>
                            Last
                        </button>
                    </>
                )
            }
        </>
    )
}