import Table from "../Table";
import uncDrg from "../../data/unc/drg";

class UNCTable extends Table {
  tableData = uncDrg;
  columns = [
    {title: "Code", field: "drg_code"},
    {title: "Description", field: "drg_description"},
    {title: "Average Price", field: "avg_price"},
  ];
  tableHeader = "UNC Medical Center DRG"
}

export default UNCTable;
