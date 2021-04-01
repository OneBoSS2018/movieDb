import React from 'react'

const style = {
    width: '30px'
}

export default function Pagination( {p, setP}){
    return (
        <>
            {
                p === 1 ? (
                    <>
                        <button disabled={true} onClick={() => setP(p + 1 - p)}>
                            First
                        </button>
                        <button disabled={true} onClick={() => setP(p - 1)}>
                            Previous
                        </button>
                    </>
                ) : (
                    <>
                        <button disabled={false} onClick={() => setP(p + 1 - p)}>
                            First
                        </button>
                        <button disabled={false} onClick={() => setP(p - 1)}>
                            Previous
                        </button>
                    </>
                )
            }
            <div style={style}><p>{p}</p></div>
            {
                p === 500 ? (
                    <>
                        <button disabled={true} onClick={() => setP(p + 1)}>
                            Next
                        </button>
                        <button disabled={true} onClick={() => setP(p - p + 500)}>
                            Last
                        </button>
                    </>
                ) : (
                    <>
                        <button disabled={false} onClick={() => setP(p + 1)}>
                            Next
                        </button>
                        <button disabled={false} onClick={() => setP(p - p + 500)}>
                            Last
                        </button>
                    </>
                )
            }
        </>
    )
}