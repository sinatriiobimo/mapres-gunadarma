import React from "react";
import formatThousand from "utils/formatNumber";

export default function InfoFaculty({ data }) {
    return (
        <div
            style={{background: '#E5D8F5'}}
            className="border border-gray-300 p-6"
            style={{ width: 250 }}
        >
            <div className="flex">
                <div className="w-auto">{data.icon}</div>
                <div className="ml-5 mb-2">
                    <span style={{display: 'block'}} className="text-gray-600">{data.meta}</span>
                    <span className="text-gray-900 text-3xl">
                        {typeof data.value === "number"
                            ? formatThousand(data.value)
                            : data?.value}
                    </span>
                </div>
            </div>
        </div>
    );
}
