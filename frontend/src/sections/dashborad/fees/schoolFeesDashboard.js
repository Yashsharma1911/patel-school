import React, { useContext, useEffect, useState } from 'react'
import { Fees } from '../../../baseui/components/fees'
import { FirebaseUserContext } from "../../../context/firebase";
import {
    TableBuilder,
    TableBuilderColumn,
} from 'baseui/table-semantic';
import { RadioGroup, Radio } from "baseui/radio";
import { Button, SIZE } from "baseui/button";



export default function SchoolFeesDashboard() {
    // use context api to get the user name
    const [value, setValue] = useState("1");
    const [tableData, setTableData] = useState([
        {
            value: '1',
            bar: 'Annually',
            installments: 1,
            installmentMoney: 4500,
            total: 4500,
            url: 'https://example.com/b',
            enabled: true,
        },
        {
            value: '2',
            bar: 'Half Yearly',
            installments: 2,
            total: 5000,
            installmentMoney: 2500,
            url: 'https://example.com/c',
            enabled: false,
        },
        {
            value: '3',
            bar: 'Quarterly',
            installments: 3,
            installmentMoney: 2550,
            total: 5100,
            url: 'https://example.com/a',
            enabled: false,
        },
    ])
    const { user } = useContext(FirebaseUserContext);

    const handleRadioChange = (e) => {
        setValue(e.currentTarget.value);
        tableData.forEach((item) => {
            item.enabled = item.value === e.currentTarget.value;
        });
        setTableData([...tableData]);
    }

    // console.log(data.className)


    return (
        <>
            <Fees>
                <div className="headingContainer">
                    <p className="heading">
                        Hi {user.displayName ? user.displayName : "User"}
                    </p>
                    <p className="subHeading">
                        Pay your fees securely and conveniently with our online payment portal. Industry-standard security measures, like SSL encryption and secure payment gateways, protect your financial information. Contact us for any questions or support. Thank you for choosing us.
                    </p>
                </div>

                <Fees.DivSub>
                    <div className="item item1">
                        <TableBuilder data={tableData}>
                            <TableBuilderColumn>
                                {row => <RadioGroup
                                    value={value}
                                    onChange={handleRadioChange}
                                    name="number"
                                >
                                    <Radio value={row.value}></Radio>
                                </RadioGroup>}
                            </TableBuilderColumn>
                            <TableBuilderColumn header="Payment Type">
                                {row => row.bar}
                            </TableBuilderColumn>
                            <TableBuilderColumn header="Installment" numeric>
                                {row => `${row.installments} X`}
                            </TableBuilderColumn>
                            <TableBuilderColumn header="Installment Money" numeric>
                                {row => `₹ ${row.installmentMoney}`}
                            </TableBuilderColumn>
                            <TableBuilderColumn header="Total" numeric>
                                {row => `₹ ${row.total}`}
                            </TableBuilderColumn>
                            <TableBuilderColumn header="Pay">
                                {row => <Button onClick={() => alert("click")} size={SIZE.compact} disabled={!row.enabled}>Pay</Button>}
                            </TableBuilderColumn>
                        </TableBuilder>
                    </div>
                    <div className="item item2">

                    </div>
                    <div className="item item3">two</div>
                    <div className="item item4">mee</div>
                </Fees.DivSub>
            </Fees>
        </>
    )
}
