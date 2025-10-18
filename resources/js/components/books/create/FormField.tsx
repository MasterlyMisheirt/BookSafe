import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { type ReactNode } from 'react';

interface FormFieldProps {
    id: string;
    name: string;
    label: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'url';
    placeholder?: string;
    required?: boolean;
    rows?: number;
    children?: ReactNode;
}

export default function FormField({
    id,
    name,
    label,
    type = 'text',
    placeholder,
    required = false,
    rows,
    children,
}: FormFieldProps) {
    return (
        <div className="space-y-2">
            <Label htmlFor={id} className="text-foreground">
                {label} {required && '*'}
            </Label>
            {children ||
                (rows ? (
                    <Textarea
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        required={required}
                        rows={rows}
                        className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                    />
                ) : (
                    <Input
                        id={id}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                    />
                ))}
        </div>
    );
}
