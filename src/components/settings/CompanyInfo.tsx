
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building, User, Mail, Briefcase, Users, DollarSign } from "lucide-react";

export function CompanyInfo() {
  const companyData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@virocards.com",
    companyName: "ViroCards B.V. (prod)",
    companyType: "BV",
    industry: "Information and Communication",
    employees: "3",
    revenue: "Less than €1 million",
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Information</CardTitle>
        <CardDescription>
          View and manage your company details
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <User className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="firstName"
                  className="border-0 p-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={companyData.firstName}
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <User className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="lastName"
                  className="border-0 p-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={companyData.lastName}
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <Mail className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="email"
                  className="border-0 p-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={companyData.email}
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <Building className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="companyName"
                  className="border-0 p-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={companyData.companyName}
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyType">Company Type</Label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <Briefcase className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="companyType"
                  className="border-0 p-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={companyData.companyType}
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <Briefcase className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="industry"
                  className="border-0 p-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={companyData.industry}
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="employees">Number of employees</Label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <Users className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="employees"
                  className="border-0 p-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={companyData.employees}
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="revenue">Annual Revenue</Label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <DollarSign className="h-4 w-4 text-gray-500 mr-2" />
                <Input
                  id="revenue"
                  className="border-0 p-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={companyData.revenue}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
