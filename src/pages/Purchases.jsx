import { useEffect, useState } from "react";
import PurchasesTable from "../components/PurchasesTable";
import useStockRequest from "../services/useStockRequest";
import PurchasesModal from "../components/PurchasesModal";
import { Button } from "@mui/material";

const Purchases = () => {
	const { getStock } = useStockRequest();

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const [info, setInfo] = useState({
		firmId: "",
		brandId: "",
		productId: "",
		quantity: "",
		price: "",
	});
	const handleClose = () => {
		setOpen(false);
		setInfo({
			firmId: "",
			brandId: "",
			productId: "",
			quantity: "",
			price: "",
		});
	};

	useEffect(() => {
		getStock("purchases");
	}, []);
	return (
		<div>
			<Button variant="contained" onClick={handleOpen}>
				New Purchase
			</Button>
			<PurchasesTable handleOpen={handleOpen} setInfo={setInfo} />
			<PurchasesModal
				handleClose={handleClose}
				open={open}
				info={info}
				setInfo={setInfo}
			/>
		</div>
	);
};

export default Purchases;
