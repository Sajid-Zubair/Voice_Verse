// "use client";
// import { createCompanion } from "@/lib/actions/companion.action";
// import { z } from "zod";
// import { Textarea } from "@/components/ui/textarea"
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { redirect } from "next/navigation";

// const formSchema = z.object({
//   name: z.string().min(1, { message: "Companion name is required" }),
//   subject: z.string().min(1, { message: "Subject is required" }),
//   topic: z.string().min(1, { message: "Topic is required" }),
//   voice: z.string().min(1, { message: "Voice is required" }),
//   style: z.string().min(1, { message: "Style is required" }),
//   duration: z.coerce.number().min(1, {
//     message: "Duration must be at least 1 minute",
//   }),
// });

// const subjects = [
//   { label: "Math", value: "math" },
//   { label: "Science", value: "science" },
//   { label: "History", value: "history" },
//   { label: "English", value: "english" },
//   { label: "Coding", value: "coding" },
//   { label: "Economics", value: "economics" },
// ];

// type FormData = z.infer<typeof formSchema>;

// const CompanionForm = () => {
//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       subject: "",
//       topic: "",
//       voice: "",
//       style: "",
//       duration: 15,
//     },
//   });

//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     console.log(values);
//     const companion = await createCompanion(values)

//     if(companion){
//       redirect(`/companions/${companion.id}`);
//     }else{
//       redirect('/')
//     }
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Companion Name</FormLabel>
//               <FormControl>
//                 <Input placeholder="Enter the Companion Name" {...field} className="input" />
//               </FormControl>
//               <FormDescription>
//                 This is your companion’s public name.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="subject"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Subject</FormLabel>
//               <FormControl>
//                 <Select
//                     onValueChange={field.onChange}
//                     value={field.value}
//                     defaultValue={field.value}
//                 >
//                     <SelectTrigger className="input capitalize">
//                         <SelectValue placeholder="Select the subject" />
//                     </SelectTrigger>
//                     <SelectContent>
//                         {subjects.map((subject) =>(
//                             <SelectItem 
//                                 key={subject.label} 
//                                 value={subject.value}
//                                 className="capitalize"
//                             >
//                                 {subject.label}
//                             </SelectItem>
//                         ))}
//                     </SelectContent>
//                 </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="topic"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>What should the Companion Help with</FormLabel>
//               <FormControl>
//                 <Textarea placeholder="Ex. Derivatives and Integrals" {...field} className="input" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />


//         <FormField
//           control={form.control}
//           name="voice"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Voice</FormLabel>
//               <FormControl>
//                 <Select
//                     onValueChange={field.onChange}
//                     value={field.value}
//                     defaultValue={field.value}
//                 >
//                     <SelectTrigger className="input">
//                         <SelectValue placeholder="Select the voice" />
//                     </SelectTrigger>
//                     <SelectContent>
//                         <SelectItem value="male">
//                             Male
//                         </SelectItem>
//                         <SelectItem value="female">
//                             Female
//                         </SelectItem>
//                     </SelectContent>
//                 </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />


//         <FormField
//           control={form.control}
//           name="style"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Style</FormLabel>
//               <FormControl>
//                 <Select
//                     onValueChange={field.onChange}
//                     value={field.value}
//                     defaultValue={field.value}
//                 >
//                     <SelectTrigger className="input">
//                         <SelectValue placeholder="Select the Style" />
//                     </SelectTrigger>
//                     <SelectContent>
//                         <SelectItem value="formal">
//                             Formal
//                         </SelectItem>
//                         <SelectItem value="casual">
//                             Casual
//                         </SelectItem>
//                     </SelectContent>
//                 </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="duration"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Estimated Session duration in minutes</FormLabel>
//               <FormControl>
//                 <Input
//                     type="number"
//                     placeholder="15"
//                     {...field}
//                     className="input"
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit" className="w-full cursor-pointer">Build Your Companion</Button>
//       </form>
//     </Form>
//   );
// };

// export default CompanionForm;


// 'use client';

// import { createCompanion } from "@/lib/actions/companion.action";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import {
//   Form, FormControl, FormDescription, FormField,
//   FormItem, FormLabel, FormMessage
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

// import {
//   Select, SelectContent, SelectItem,
//   SelectTrigger, SelectValue
// } from "@/components/ui/select";

// import { redirect } from "next/navigation";

// const formSchema = z.object({
//   name: z.string().min(1, { message: "Companion name is required" }),
//   subject: z.string().min(1, { message: "Subject is required" }),
//   topic: z.string().min(1, { message: "Topic is required" }),
//   voice: z.string().min(1, { message: "Voice is required" }),
//   style: z.string().min(1, { message: "Style is required" }),
//   duration: z.coerce.number().min(1, { message: "Must be at least 1 minute" }),
// });

// type FormData = z.infer<typeof formSchema>;

// const subjects = [
//   { label: "Math", value: "math" },
//   { label: "Science", value: "science" },
//   { label: "History", value: "history" },
//   { label: "English", value: "english" },
//   { label: "Coding", value: "coding" },
//   { label: "Economics", value: "economics" },
// ];

// const CompanionForm = () => {
//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       subject: "",
//       topic: "",
//       voice: "",
//       style: "",
//       duration: 15,
//     },
//   });

//   const onSubmit = async (values: FormData) => {
//     const companion = await createCompanion(values);
//     companion ? redirect(`/companions/${companion.id}`) : redirect('/');
//   };

//   return (
//     <Form {...form} >
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-md">
//         <h2 className="text-2xl font-bold text-zinc-800 dark:text-white">Build Your Companion</h2>

//         {/* Companion Name */}
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-sm font-medium">Companion Name</FormLabel>
//               <FormControl>
//                 <Input
//                   placeholder="Enter the Companion Name"
//                   {...field}
//                 />
//               </FormControl>
//               <FormDescription>This is your companion’s public name.</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Subject */}
//         <FormField
//           control={form.control}
//           name="subject"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-sm font-medium">Subject</FormLabel>
//               <Select onValueChange={field.onChange} value={field.value}>
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select the subject" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent>
//                   {subjects.map((subject) => (
//                     <SelectItem key={subject.value} value={subject.value} className="capitalize">
//                       {subject.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Topic */}
//         <FormField
//           control={form.control}
//           name="topic"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-sm font-medium">What should the Companion Help with?</FormLabel>
//               <FormControl>
//                 <Textarea
//                   placeholder="Ex. Derivatives and Integrals"
//                   {...field}
//                   rows={4}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Voice */}
//         <FormField
//           control={form.control}
//           name="voice"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-sm font-medium">Voice</FormLabel>
//               <Select onValueChange={field.onChange} value={field.value}>
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select voice" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent>
//                   <SelectItem value="male">Male</SelectItem>
//                   <SelectItem value="female">Female</SelectItem>
//                 </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Style */}
//         <FormField
//           control={form.control}
//           name="style"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-sm font-medium">Style</FormLabel>
//               <Select onValueChange={field.onChange} value={field.value}>
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select style" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent>
//                   <SelectItem value="formal">Formal</SelectItem>
//                   <SelectItem value="casual">Casual</SelectItem>
//                 </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Duration */}
//         <FormField
//           control={form.control}
//           name="duration"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-sm font-medium">Estimated Duration (in minutes)</FormLabel>
//               <FormControl>
//                 <Input type="number" placeholder="15" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         {/* Submit Button */}
//         <Button type="submit" className="w-full font-semibold text-base py-3">
//           Build Your Companion
//         </Button>
//       </form>
//     </Form>
//   );
// };

// export default CompanionForm;




'use client';

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form, FormControl, FormDescription, FormField,
  FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Select, SelectContent, SelectItem,
  SelectTrigger, SelectValue
} from "@/components/ui/select";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, MessageSquare, Mic, User, BookOpen } from "lucide-react";
import { createCompanion } from "@/lib/actions/companion.action";
import { redirect } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, { message: "Companion name is required" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  topic: z.string().min(1, { message: "Topic is required" }),
  voice: z.string().min(1, { message: "Voice is required" }),
  style: z.string().min(1, { message: "Style is required" }),
  duration: z.coerce.number().min(1, {
    message: "Duration must be at least 1 minute",
  }),
});

const subjects = [
  { label: "Math", value: "math" },
  { label: "Science", value: "science" },
  { label: "History", value: "history" },
  { label: "English", value: "english" },
  { label: "Coding", value: "coding" },
  { label: "Economics", value: "economics" },
];

type FormData = z.infer<typeof formSchema>;

const CompanionForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: 15,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    const companion = await createCompanion(values)

    if(companion){
      redirect(`/companions/${companion.id}`);
    }else{
      redirect('/')
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg mx-auto">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Create Your AI Companion
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Build a personalized learning companion tailored to your needs. Choose your subject, style, and preferences to get started.
          </p>
        </div>

        {/* Form Card */}
        <Card className="w-full shadow-2xl border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl">
          <CardHeader className="pb-8">
            <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white">
              Companion Configuration
            </CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">
              Fill in the details below to create your personalized learning companion
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">

                {/* Row 1: Name and Subject */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-base font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                          <User className="w-5 h-5 text-blue-600" />
                          Companion Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Alex, Sarah, Professor Smith"
                            className="h-12 text-base bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-sm text-slate-500 dark:text-slate-400">
                          Choose a friendly name for your AI companion
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="space-y-3 mb-6">
                        <FormLabel className="text-base font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-green-600" />
                          Subject Area
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 text-base bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 w-full">
                              <SelectValue placeholder="Select your subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                              {subjects.map((subject) =>(
                            <SelectItem 
                                key={subject.label} 
                                value={subject.value}
                                className="capitalize"
                            >
                                {subject.label}
                            </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Topic Field */}
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-base font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-purple-600" />
                        Learning Focus
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe what you'd like to learn or get help with. For example: 'Advanced calculus concepts including derivatives and integrals' or 'Essay writing and literary analysis techniques'"
                          className="min-h-[120px] text-base bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-sm text-slate-500 dark:text-slate-400">
                        Be specific about the topics or concepts you want to focus on
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Row 2: Voice, Style, and Duration */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  <FormField
                    control={form.control}
                    name="voice"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-base font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                          <Mic className="w-5 h-5 text-orange-600" />
                          Voice Preference
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 text-base bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 w-full">
                              <SelectValue placeholder="Choose voice" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male" className="py-3">
                              <div className="flex items-center gap-2">
                                <span>🗣️</span>
                                <span>Male Voice</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="female" className="py-3">
                              <div className="flex items-center gap-2">
                                <span>🗣️</span>
                                <span>Female Voice</span>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-base font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                          <Badge className="w-5 h-5 text-indigo-600" />
                          Communication Style
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 text-base bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 w-full">
                              <SelectValue placeholder="Select style" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="formal" className="py-3">
                              <div className="flex items-center gap-2">
                                <span>🎓</span>
                                <span>Professional & Formal</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="casual" className="py-3">
                              <div className="flex items-center gap-2">
                                <span>😊</span>
                                <span>Friendly & Casual</span>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-base font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                          <Clock className="w-5 h-5 text-red-600" />
                          Session Duration
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="number"
                              placeholder="15"
                              className="h-12 text-base bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 pr-20 w-full"
                              {...field}
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                              minutes
                            </span>
                          </div>
                        </FormControl>
                        <FormDescription className="text-sm text-slate-500 dark:text-slate-400">
                          Recommended: 15-30 minutes
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                  <Button
                    type="submit"
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Creating Companion...
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-center gap-2 max-w-full break-words px-2">
                        <Brain className="w-5 h-5 flex-shrink-0" />
                        <span className="text-center sm:text-left text-sm sm:text-base break-words">
                          Create My AI Companion
                        </span>
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/60 dark:bg-slate-900/60 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Personalized Learning</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Tailored to your learning style and pace</p>
          </div>

          <div className="text-center p-6 bg-white/60 dark:bg-slate-900/60 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Interactive Sessions</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Engaging conversations and real-time feedback</p>
          </div>

          <div className="text-center p-6 bg-white/60 dark:bg-slate-900/60 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Flexible Scheduling</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Learn at your own convenience and pace</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanionForm;
