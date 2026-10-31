import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ApplicationFormProps {
  propertyName: string;
}

export const ApplicationForm = ({ propertyName }: ApplicationFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // FormSubmit.co will handle email forwarding
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description: "We'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{propertyName}</h2>
        <p className="text-muted-foreground">Complete the form below to apply</p>
      </div>

      <form 
        action="https://formsubmit.co/websiteguy.ww@gmail.com" 
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Hidden fields for FormSubmit configuration */}
        <input type="hidden" name="_subject" value={`New Application - ${propertyName}`} />
        <input type="hidden" name="_cc" value="robinson@nathgroup.co.za,maureen@mmmworks.co.za" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="Property" value={propertyName} />

        {/* Full Names */}
        <div className="space-y-2">
          <Label htmlFor="fullNames" className="text-sm font-medium">
            Full Names <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullNames"
            name="Full Names"
            placeholder="Enter your full names"
            required
            maxLength={100}
            className="w-full"
          />
        </div>

        {/* ID Number */}
        <div className="space-y-2">
          <Label htmlFor="idNumber" className="text-sm font-medium">
            ID Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="idNumber"
            name="ID Number"
            placeholder="Enter your ID number"
            required
            maxLength={13}
            pattern="[0-9]{13}"
            title="Please enter a valid 13-digit ID number"
            className="w-full"
          />
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <Label htmlFor="gender" className="text-sm font-medium">
            Gender <span className="text-destructive">*</span>
          </Label>
          <Select name="Gender" required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
              <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="Email Address"
            type="email"
            placeholder="your.email@example.com"
            required
            maxLength={255}
            className="w-full"
          />
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            name="Phone Number"
            type="tel"
            placeholder="0XX XXX XXXX"
            required
            maxLength={20}
            className="w-full"
          />
        </div>

        {/* University */}
        <div className="space-y-2">
          <Label htmlFor="university" className="text-sm font-medium">
            University <span className="text-destructive">*</span>
          </Label>
          <Input
            id="university"
            name="University"
            placeholder="Enter your university name"
            required
            maxLength={150}
            className="w-full"
          />
        </div>

        {/* Payment Form */}
        <div className="space-y-2">
          <Label htmlFor="paymentForm" className="text-sm font-medium">
            Payment Form <span className="text-destructive">*</span>
          </Label>
          <Select name="Payment Form" required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select payment form" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Cash">Cash</SelectItem>
              <SelectItem value="NSFAS">NSFAS</SelectItem>
              <SelectItem value="Bursary">Bursary</SelectItem>
              <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
              <SelectItem value="Company Sponsored">Company Sponsored</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Degree/Program */}
        <div className="space-y-2">
          <Label htmlFor="degree" className="text-sm font-medium">
            Degree/Program <span className="text-destructive">*</span>
          </Label>
          <Input
            id="degree"
            name="Degree/Program"
            placeholder="e.g., BACHELOR OF ARCHITECTURE"
            required
            maxLength={150}
            className="w-full"
          />
        </div>

        {/* Year of Study */}
        <div className="space-y-2">
          <Label htmlFor="yearOfStudy" className="text-sm font-medium">
            Year of Study <span className="text-destructive">*</span>
          </Label>
          <Select name="Year of Study" required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select year of study" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1st Year">1st Year</SelectItem>
              <SelectItem value="2nd Year">2nd Year</SelectItem>
              <SelectItem value="3rd Year">3rd Year</SelectItem>
              <SelectItem value="4th Year">4th Year</SelectItem>
              <SelectItem value="Postgraduate">Postgraduate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full py-6 text-lg font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>

        <p className="text-xs text-muted-foreground text-center mt-4">
          By submitting this form, you agree to our terms and conditions.
        </p>
      </form>
    </div>
  );
};
