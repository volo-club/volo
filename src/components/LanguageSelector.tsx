
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
];

export default function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (value: string) => {
    setCurrentLanguage(value);
    localStorage.setItem("language", value);
    // Here you would implement actual language change logic
    // For a real implementation, you'd use i18n libraries like react-i18next
  };

  return (
    <div className="flex items-center">
      <Select value={currentLanguage} onValueChange={handleLanguageChange}>
        <SelectTrigger 
          className="w-[80px] h-10 border-none bg-transparent focus:ring-0" 
          aria-label="Select Language"
        >
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4" />
            <SelectValue placeholder="Select language" />
          </div>
        </SelectTrigger>
        <SelectContent align="start" className="w-[160px]">
          {languages.map((language) => (
            <SelectItem key={language.code} value={language.code} className="cursor-pointer">
              <div className="flex items-center space-x-2">
                <span>{language.flag}</span>
                <span>{language.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
