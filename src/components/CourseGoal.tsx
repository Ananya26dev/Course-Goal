
import { type FC, type PropsWithChildren} from "react";
import "./CourseGoal.css";

// interface CourseGoalProps{
//   title: string;
//   children: ReactNode;
// }
type CourseGoalProps = PropsWithChildren<{
  id:number;
  title: string;
  onDelete:(id:number) => void;
}>;
const CourseGoal: FC<CourseGoalProps> = ({title,id,children,onDelete}) =>{
  return (
  <>
    <div>
      <h2>{title}</h2>
      {children}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  </> 
  );
}
export default  CourseGoal;
// export default function CourseGoal({
//   title,
//   children,
// }: CourseGoalProps){
//   return <>
//     <div>
//       <h2>{title}</h2>
//       {children}
//       <button>Delete</button>
//     </div>
//   </>
// }