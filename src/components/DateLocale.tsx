import { format } from "date-fns";
import { fr } from "date-fns/locale";

type Props = {
  date: Date;
};
function DateLocale({ date }: Props) {
  return <span>{format(date, "P", { locale: fr })}</span>;
}
export default DateLocale;
