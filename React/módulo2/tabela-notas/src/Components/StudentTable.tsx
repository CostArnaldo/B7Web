import { Student} from "@/types/Student"
import { table } from "console"

type Props = {
    students: Student[];
}


export const StudentTable = ({students}: Props) => {
    return (
        <table className="w-full border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className="text-left border-b border-yellow-600 bg-gray-800">
                    <th className="p-4">Name</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Nota 1</th>
                    <th className="p-4">Nota 2</th>
                    <th className="p-4">Nota Final</th>
                </tr>
            </thead>
            <tbody>
                {students.map(item => (
                    <tr key={item.id} className="text-gray-800 bg-gray-200 border-b border-yellow-600">
                        <td>
                            <img src={item.avatar} alt={item.name} className="w-50 h-30 rounded-full "/>
                        
                            <div>
                                <div className="font-bold">{item.name}</div>
                                <div>{item.email}</div>
                            </div>
                        </td>
                        <td>
                            {item.active && <div className="px-4 py-2 inline-block rounded-md border border-green-500 bg-green-400 text-white text-sm}">Active</div>}
                            {!item.active && <div className="px-4 py-2 inline-block rounded-md border border-red-600 bg-red-400 text-white text-sm}">Inactive</div>}
                        </td>
                        <td className="p-8">{item.nota1.toFixed(1)}</td>
                        <td className="p-8">{item.nota2.toFixed(1)}</td>
                        <td className="p-8 font-bold">{item.active ? ((item.nota1 + item.nota2) / 2).toFixed(1) : '--'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}