
import React from 'react';

function ImportCSVTable(props) {
    return (
        <>
            {props.data.csv_data.length > 0 &&
            <div className='py-10'>
                <h4 className='text-center'>Product List</h4>
				<table className="min-w-full text-center text-sm font-light">
					<thead
						className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
						<tr>
						<th scope="col" className=" px-6 py-4">Product Name</th>
						<th scope="col" className=" px-6 py-4">Price</th>
						<th scope="col" className=" px-6 py-4">SKU</th>
                        <th scope="col" className=" px-6 py-4">Description</th>
						</tr>
					</thead>
					<tbody>
                    {props.data.csv_data.map((item, index) => (
						<tr className="border-b dark:border-neutral-500" key={index}>
							<td className="whitespace-nowrap  px-6 py-4">{item['product_name']}</td>
							<td className="whitespace-nowrap  px-6 py-4">{item['price']}</td>
							<td className="whitespace-nowrap  px-6 py-4">{item['sku']}</td>
                            <td className="whitespace-nowrap  px-6 py-4">{item['description']}</td>
						</tr>
                    ))}
					</tbody>
				</table>
			</div>
            }
        </>
    )
}

export default ImportCSVTable;