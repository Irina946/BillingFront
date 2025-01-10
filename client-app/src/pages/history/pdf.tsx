interface IPDFHistori {
    name: string,
    date: string,
    count: string,
    sum: number,
}
export const historyToPDF = (props: IPDFHistori[]) => {
    return (
        <div>
            <h1>Отчёт по операциям за прошлый месяц</h1>
            <table>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Дата</th>
                        <th>Количество</th>
                        <th>Сумма</th>
                    </tr>
                </thead>
                <tbody>
                    {props.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td>{item.count !== '0' && item.count}</td>
                            <td>{item.sum} ₽</td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    )
}