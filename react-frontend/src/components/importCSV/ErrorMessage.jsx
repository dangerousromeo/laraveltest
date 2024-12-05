
import React from 'react';

function ErrorMessage(props) {
    return (
        <>
            {props.data.errors.length > 0 &&
            <div>
                <h4 className='text-center'>CSV data validation errors, Please fix and upload again</h4>
				<ul className="list-disc text-red-400">
                    {props.data.errors.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
			</div>
            }
        </>
    )
}

export default ErrorMessage;