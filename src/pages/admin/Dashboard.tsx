import HeroForm from "../../components/admin/HeroForm";
import ServicesForm from "../../components/admin/ServicesForm";
import CasesForm from "../../components/admin/CasesForm";

export default function DashboardPage() {
  return (
    <div style={{ padding: 40 }}>
      <HeroForm />
      <div style={{ height: 24 }} />
      <ServicesForm />
          <div style={{ height: 24 }} />
      <CasesForm />
    </div>
  );
}